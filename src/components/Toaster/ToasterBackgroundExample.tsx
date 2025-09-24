import { Toaster } from './index';

// Example showing toaster background color features
export const ToasterBackgroundExample = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎨 Toaster Background Colors</h1>
      <p className="text-center text-gray-600">
        Click the buttons below to see toasters with different background colors and intensities
      </p>
      
      {/* Color Palette Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Color Palette Examples</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Purple */}
          <Toaster
            title="Purple"
            description="Purple background toaster"
            variant="default"
            bgColor="purple"
            bgIntensity="50"
            children="Purple"
          />

          {/* Teal */}
          <Toaster
            title="Teal"
            description="Teal background toaster"
            variant="default"
            bgColor="teal"
            bgIntensity="100"
            children="Teal"
          />

          {/* Orange */}
          <Toaster
            title="Orange"
            description="Orange background toaster"
            variant="default"
            bgColor="orange"
            bgIntensity="200"
            children="Orange"
          />

          {/* Pink */}
          <Toaster
            title="Pink"
            description="Pink background toaster"
            variant="default"
            bgColor="pink"
            bgIntensity="50"
            children="Pink"
          />

          {/* Indigo */}
          <Toaster
            title="Indigo"
            description="Indigo background toaster"
            variant="default"
            bgColor="indigo"
            bgIntensity="100"
            children="Indigo"
          />

          {/* Emerald */}
          <Toaster
            title="Emerald"
            description="Emerald background toaster"
            variant="default"
            bgColor="emerald"
            bgIntensity="200"
            children="Emerald"
          />
        </div>
      </div>

      {/* Intensity Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Intensity Examples (Blue)</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Toaster
            title="Light Blue"
            description="Intensity 50"
            variant="default"
            bgColor="blue"
            bgIntensity="50"
            children="50"
          />

          <Toaster
            title="Blue"
            description="Intensity 100"
            variant="default"
            bgColor="blue"
            bgIntensity="100"
            children="100"
          />

          <Toaster
            title="Medium Blue"
            description="Intensity 200"
            variant="default"
            bgColor="blue"
            bgIntensity="200"
            children="200"
          />

          <Toaster
            title="Dark Blue"
            description="Intensity 300"
            variant="default"
            bgColor="blue"
            bgIntensity="300"
            children="300"
          />

          <Toaster
            title="Darker Blue"
            description="Intensity 400"
            variant="default"
            bgColor="blue"
            bgIntensity="400"
            children="400"
          />
        </div>
      </div>

      {/* Special Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Special Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Rose */}
          <Toaster
            title="Rose"
            description="Rose background toaster"
            variant="default"
            bgColor="rose"
            bgIntensity="50"
            children="Rose"
          />

          {/* Sky */}
          <Toaster
            title="Sky"
            description="Sky background toaster"
            variant="default"
            bgColor="sky"
            bgIntensity="100"
            children="Sky"
          />

          {/* Amber */}
          <Toaster
            title="Amber"
            description="Amber background toaster"
            variant="default"
            bgColor="amber"
            bgIntensity="200"
            children="Amber"
          />

          {/* Violet */}
          <Toaster
            title="Violet"
            description="Violet background toaster"
            variant="default"
            bgColor="violet"
            bgIntensity="100"
            children="Violet"
          />
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
        <h2 className="text-lg font-semibold text-green-800 mb-3">🎨 How to Use Toaster Background Colors</h2>
        <div className="text-sm text-green-700 space-y-2">
          <p><strong>Basic Usage:</strong></p>
          <code className="block bg-green-100 p-2 rounded text-xs">
            {`<Toaster bgColor="purple" bgIntensity="50" title="..." description="..." />`}
          </code>
          
          <p><strong>Available Colors:</strong></p>
          <p className="text-xs">
            white, gray, red, green, blue, yellow, purple, pink, indigo, teal, orange, 
            cyan, lime, emerald, violet, fuchsia, rose, sky, amber, stone, neutral, zinc, slate
          </p>
          
          <p><strong>Available Intensities:</strong></p>
          <p className="text-xs">50, 100, 200, 300, 400, 500, 600, 700, 800, 900</p>
          
          <p><strong>Note:</strong> Text and border colors are automatically adjusted for optimal contrast!</p>
        </div>
      </div>
    </div>
  );
};
