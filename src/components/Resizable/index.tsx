import { cn } from '@/lib/utils';
import React, { ComponentPropsWithRef, forwardRef, ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { Plus, X, GripVertical, Settings, Maximize2, Minimize2 } from 'lucide-react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './ResizableComp';

export interface PanelConfig {
  id: string;
  content: ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
  children?: PanelConfig[];
  title?: string;
  closable?: boolean;
  resizable?: boolean;
  collapsible?: boolean;
  collapsed?: boolean;
  draggable?: boolean;
  color?: string;
}

export interface DynamicResizableProps extends ComponentPropsWithRef<'div'> {
  direction?: 'horizontal' | 'vertical';
  type?: 'basic' | 'vertical' | 'nested' | 'dynamic';
  className?: string;
  panels?: PanelConfig[];
  height?: string | number;
  width?: string | number;
  showHandles?: boolean;
  handleClassName?: string;
  // Dynamic features
  editable?: boolean;
  addable?: boolean;
  removable?: boolean;
  draggable?: boolean;
  collapsible?: boolean;
  onPanelsChange?: (panels: PanelConfig[]) => void;
  onPanelAdd?: (panel: PanelConfig) => void;
  onPanelRemove?: (panelId: string) => void;
  onPanelCollapse?: (panelId: string, collapsed: boolean) => void;
  showControls?: boolean;
  controlsPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const DynamicPanelControls = ({ 
  panel, 
  onRemove, 
  onCollapse, 
  onSettings,
  removable = true,
  collapsible = true 
}: {
  panel: PanelConfig;
  onRemove?: (id: string) => void;
  onCollapse?: (id: string, collapsed: boolean) => void;
  onSettings?: (id: string) => void;
  removable?: boolean;
  collapsible?: boolean;
}) => {
  return (
    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
      {collapsible && (
        <button
          onClick={() => onCollapse?.(panel.id, !panel.collapsed)}
          className="p-1 rounded bg-white/80 hover:bg-white shadow-sm border"
          title={panel.collapsed ? "Expand" : "Collapse"}
        >
          {panel.collapsed ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
        </button>
      )}
      {onSettings && (
        <button
          onClick={() => onSettings(panel.id)}
          className="p-1 rounded bg-white/80 hover:bg-white shadow-sm border"
          title="Settings"
        >
          <Settings className="h-3 w-3" />
        </button>
      )}
      {removable && (
        <button
          onClick={() => onRemove?.(panel.id)}
          className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600 shadow-sm border"
          title="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
        </div>
  );
};

const DynamicPanel = ({ 
  panel, 
  direction, 
  onRemove,
  onCollapse,
  onSettings,
  removable = true,
  collapsible = true,
  draggable = false
}: { 
  panel: PanelConfig; 
  direction: 'horizontal' | 'vertical';
  onRemove?: (id: string) => void;
  onCollapse?: (id: string, collapsed: boolean) => void;
  onSettings?: (id: string) => void;
  removable?: boolean;
  collapsible?: boolean;
  draggable?: boolean;
}) => {
  if (panel.children && panel.children.length > 0) {
    return (
      <ResizablePanel
        key={panel.id}
        defaultSize={panel.defaultSize}
        minSize={panel.minSize}
        maxSize={panel.maxSize}
        className={cn(
          'relative group',
          panel.className,
          panel.collapsed && 'pointer-events-none'
        )}
        style={{ 
          display: panel.collapsed ? 'none' : 'block',
          backgroundColor: panel.color ? `${panel.color}20` : undefined
        }}
      >
        <DynamicPanelControls
          panel={panel}
          onRemove={onRemove}
          onCollapse={onCollapse}
          onSettings={onSettings}
          removable={removable}
          collapsible={collapsible}
        />
        <ResizablePanelGroup direction={direction === 'horizontal' ? 'vertical' : 'horizontal'}>
          {panel.children.map((childPanel, index) => (
            <React.Fragment key={childPanel.id}>
              <DynamicPanel 
                panel={childPanel} 
                direction={direction === 'horizontal' ? 'vertical' : 'horizontal'}
                onRemove={onRemove}
                onCollapse={onCollapse}
                onSettings={onSettings}
                removable={removable}
                collapsible={collapsible}
                draggable={draggable}
              />
              {index < panel.children!.length - 1 && <ResizableHandle />}
            </React.Fragment>
          ))}
        </ResizablePanelGroup>
      </ResizablePanel>
    );
  }

  return (
    <ResizablePanel
      key={panel.id}
      defaultSize={panel.defaultSize}
      minSize={panel.minSize}
      maxSize={panel.maxSize}
              className={cn(
          'relative group',
          panel.className,
          panel.collapsed && 'pointer-events-none'
        )}
      style={{ 
        display: panel.collapsed ? 'none' : 'block',
        backgroundColor: panel.color ? `${panel.color}20` : undefined
      }}
    >
      <DynamicPanelControls
        panel={panel}
        onRemove={onRemove}
        onCollapse={onCollapse}
        onSettings={onSettings}
        removable={removable}
        collapsible={collapsible}
      />
      {panel.title && (
        <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-medium border">
          {panel.title}
        </div>
      )}
      {panel.content}
    </ResizablePanel>
  );
};

export const Resizable = forwardRef<HTMLDivElement, DynamicResizableProps>(
  ({ 
    className, 
    direction = 'horizontal', 
    type = 'basic',
    panels: initialPanels,
    height = '400px',
    width = '100%',
    showHandles = true,
    handleClassName,
    removable = true,
    draggable = false,
    collapsible = true,
    addable = false,
    onPanelsChange,
    onPanelAdd,
    onPanelRemove,
    onPanelCollapse,
    showControls = false,
    controlsPosition = 'top',
  }) => {
    const [panels, setPanels] = useState<PanelConfig[]>(initialPanels || []);
    const containerRef = useRef<HTMLDivElement>(null);

    // Update panels when initialPanels changes
    useEffect(() => {
      if (initialPanels) {
        setPanels(initialPanels);
      }
    }, [initialPanels]);

    // Predefined panel configurations for each type
    const getPredefinedPanels = (type: string): PanelConfig[] => {
      switch (type) {
        case 'nested':
          return [
            {
              id: 'panel-1',
              title: 'Main Panel',
              content: (
                <div className="flex h-[200px] items-center justify-center p-6 bg-blue-50">
                  <span className="font-semibold text-blue-700">Panel One</span>
                </div>
              ),
              defaultSize: 50,
              color: 'blue',
              closable: true,
              resizable: true,
              collapsible: true,
            },
            {
              id: 'panel-2',
              title: 'Nested Container',
              content: null,
              defaultSize: 50,
              color: 'green',
              children: [
                {
                  id: 'panel-2a',
                  title: 'Sub Panel A',
                  content: (
                    <div className="flex h-full items-center justify-center p-6 bg-green-50">
                      <span className="font-semibold text-green-700">Panel Two</span>
                    </div>
                  ),
                  defaultSize: 25,
                  color: 'green',
                  closable: true,
                },
                {
                  id: 'panel-2b',
                  title: 'Sub Panel B',
                  content: (
                    <div className="flex h-full items-center justify-center p-6 bg-purple-50">
                      <span className="font-semibold text-purple-700">Panel Three</span>
                    </div>
                  ),
                  defaultSize: 75,
                  color: 'purple',
                  closable: true,
                },
              ],
            },
          ];

        case 'vertical':
          return [
            {
              id: 'panel-1',
              title: 'Left Panel',
              content: (
                <div className="flex h-full items-center justify-center p-6 bg-red-50">
                  <span className="font-semibold text-red-700">Panel One</span>
                </div>
              ),
              defaultSize: 40,
              color: 'red',
              closable: true,
            },
            {
              id: 'panel-2',
              title: 'Right Panel',
              content: (
                <div className="flex h-full items-center justify-center p-6 bg-yellow-50">
                  <span className="font-semibold text-yellow-700">Panel Two</span>
                </div>
              ),
              defaultSize: 60,
              color: 'yellow',
              closable: true,
            },
          ];

        default: // 'basic'
          return [
            {
              id: 'panel-1',
              title: 'Panel One',
              content: (
                <div className="flex h-[200px] items-center justify-center p-6 bg-gray-50">
                  <span className="font-semibold text-gray-700">Panel One</span>
                </div>
              ),
              defaultSize: 50,
              color: 'gray',
              closable: true,
            },
            {
              id: 'panel-2',
              title: 'Panel Two',
              content: (
                <div className="flex h-[200px] items-center justify-center p-6 bg-gray-50">
                  <span className="font-semibold text-gray-700">Panel Two</span>
                </div>
              ),
              defaultSize: 50,
              color: 'gray',
              closable: true,
            },
          ];
      }
    };

    const handleAddPanel = useCallback(() => {
      const newPanel: PanelConfig = {
        id: `panel-${Date.now()}`,
        title: `New Panel ${panels.length + 1}`,
        content: (
          <div className="flex h-[200px] items-center justify-center p-6 bg-indigo-50">
            <span className="font-semibold text-indigo-700">New Panel</span>
          </div>
        ),
        defaultSize: 100 / (panels.length + 1),
        color: 'indigo',
        closable: true,
        resizable: true,
        collapsible: true,
      };
      
      const newPanels = [...panels, newPanel];
      setPanels(newPanels);
      onPanelsChange?.(newPanels);
      onPanelAdd?.(newPanel);
    }, [panels, onPanelsChange, onPanelAdd]);

    const handleRemovePanel = useCallback((panelId: string) => {
      const newPanels = panels.filter(panel => panel.id !== panelId);
      setPanels(newPanels);
      onPanelsChange?.(newPanels);
      onPanelRemove?.(panelId);
    }, [panels, onPanelsChange, onPanelRemove]);

    const handleCollapsePanel = useCallback((panelId: string, collapsed: boolean) => {
      const updatePanel = (panel: PanelConfig): PanelConfig => {
        if (panel.id === panelId) {
          return { ...panel, collapsed };
        }
        if (panel.children) {
          return { ...panel, children: panel.children.map(updatePanel) };
        }
        return panel;
      };

      const newPanels = panels.map(updatePanel);
      setPanels(newPanels);
      onPanelsChange?.(newPanels);
      onPanelCollapse?.(panelId, collapsed);
    }, [panels, onPanelsChange, onPanelCollapse]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData('text/plain');
      if (draggedId) {
        // Handle panel reordering logic here
        console.log('Dropped panel:', draggedId);
      }
    }, []);

    const getResizableContent = () => {
      // Use provided panels or get predefined ones
      const panelsToUse = panels.length > 0 ? panels : getPredefinedPanels(type);
      
      return (
        <div 
          ref={containerRef}
          className="relative"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {showControls && (
            <div className={cn(
              'flex gap-2 p-2 bg-gray-100 border-b',
              controlsPosition === 'top' && 'order-first',
              controlsPosition === 'bottom' && 'order-last',
              controlsPosition === 'left' && 'flex-col',
              controlsPosition === 'right' && 'flex-col'
            )}>
              {addable && (
                <button
                  onClick={handleAddPanel}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  <Plus className="h-4 w-4" />
                  Add Panel
                </button>
              )}
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <GripVertical className="h-4 w-4" />
                {panelsToUse.length} panels
              </div>
            </div>
          )}
          
          <ResizablePanelGroup
            direction={direction}
            className={cn('rounded-lg border', className)}
            style={{ height, width }}
          >
            {panelsToUse.map((panel, index) => (
              <React.Fragment key={panel.id}>
                <DynamicPanel 
                  panel={panel} 
                  direction={direction}
                  onRemove={removable ? handleRemovePanel : undefined}
                  onCollapse={collapsible ? handleCollapsePanel : undefined}
                  removable={removable}
                  collapsible={collapsible}
                  draggable={draggable}
                />
                {showHandles && index < panelsToUse.length - 1 && (
                  <ResizableHandle className={handleClassName} />
                )}
              </React.Fragment>
            ))}
          </ResizablePanelGroup>
        </div>
      );
    };

    return getResizableContent();
  }
);

Resizable.displayName = 'Resizable';

export {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
};
