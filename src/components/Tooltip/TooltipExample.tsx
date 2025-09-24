import { Tooltip } from './index';
import { Button } from '../Button';

// Example showing tooltip with default white background
export const TooltipExample = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">💡 Tooltip Component</h1>
      <p className="text-center text-gray-600">
        Hover over the buttons below to see tooltips with default white background
      </p>
      
      {/* Basic Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Examples</h2>
        <div className="flex gap-4 flex-wrap">
          <Tooltip
            tooltipTrigger={<Button variant="outline">Basic Tooltip</Button>}
            tooltipContent={<p>This is a basic tooltip with white background</p>}
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Hover Me</Button>}
            tooltipContent={<p>Hover to see the tooltip</p>}
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Info</Button>}
            tooltipContent={<p>This tooltip provides additional information</p>}
          />
        </div>
      </div>

      {/* Side Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Different Sides</h2>
        <div className="flex gap-4 flex-wrap">
          <Tooltip
            tooltipTrigger={<Button variant="outline">Top</Button>}
            tooltipContent={<p>Tooltip appears on top</p>}
            side="top"
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Right</Button>}
            tooltipContent={<p>Tooltip appears on right</p>}
            side="right"
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Bottom</Button>}
            tooltipContent={<p>Tooltip appears on bottom</p>}
            side="bottom"
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Left</Button>}
            tooltipContent={<p>Tooltip appears on left</p>}
            side="left"
          />
        </div>
      </div>

      {/* Custom Styling Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Styling</h2>
        <div className="flex gap-4 flex-wrap">
          <Tooltip
            tooltipTrigger={<Button variant="outline">Blue Theme</Button>}
            tooltipContent={<p>Blue themed tooltip</p>}
            className="bg-blue-50 text-blue-800 border-blue-200"
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Green Theme</Button>}
            tooltipContent={<p>Green themed tooltip</p>}
            className="bg-green-50 text-green-800 border-green-200"
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Purple Theme</Button>}
            tooltipContent={<p>Purple themed tooltip</p>}
            className="bg-purple-50 text-purple-800 border-purple-200"
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Orange Theme</Button>}
            tooltipContent={<p>Orange themed tooltip</p>}
            className="bg-orange-50 text-orange-800 border-orange-200"
          />
        </div>
      </div>

      {/* Rich Content Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Rich Content</h2>
        <div className="flex gap-4 flex-wrap">
          <Tooltip
            tooltipTrigger={<Button variant="outline">Rich Content</Button>}
            tooltipContent={
              <div className="space-y-1">
                <p className="font-semibold">Rich Tooltip</p>
                <p className="text-xs text-gray-600">This tooltip has multiple lines and formatting</p>
              </div>
            }
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">With Icon</Button>}
            tooltipContent={
              <div className="flex items-center gap-2">
                <span>ℹ️</span>
                <span>Information tooltip</span>
              </div>
            }
          />
          
          <Tooltip
            tooltipTrigger={<Button variant="outline">Warning</Button>}
            tooltipContent={
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>Warning message</span>
              </div>
            }
            className="bg-yellow-50 text-yellow-800 border-yellow-200"
          />
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-800 mb-3">💡 How to Use Tooltips</h2>
        <div className="text-sm text-blue-700 space-y-2">
          <p><strong>Basic Usage:</strong></p>
          <code className="block bg-blue-100 p-2 rounded text-xs">
            {`<Tooltip tooltipTrigger={<Button>Hover</Button>} tooltipContent={<p>Tooltip text</p>} />`}
          </code>
          
          <p><strong>Available Sides:</strong></p>
          <p className="text-xs">top, right, bottom, left</p>
          
          <p><strong>Custom Styling:</strong></p>
          <code className="block bg-blue-100 p-2 rounded text-xs">
            {`<Tooltip className="bg-blue-50 text-blue-800 border-blue-200" ... />`}
          </code>
          
          <p><strong>Default:</strong> White background with gray text and border</p>
          <p><strong>Note:</strong> Tooltips appear on hover and disappear when you move away</p>
        </div>
      </div>
    </div>
  );
};