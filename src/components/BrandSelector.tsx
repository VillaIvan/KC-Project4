import Apple from "../components/images/Apple.svg";
import Xiaomi from "../components/images/Xiaomi.svg";
import Samsung from "../components/images/Samsung.svg";
import Motorola from "../components/images/motorola.svg";

interface Brand {
  name: string;
  logo: string;
}

export default function BrandSelector() {
  const brands: Brand[] = [
    {
      name: "SAMSUNG",
      logo: Samsung.src,
    },
    {
      name: "XIAOMI",
      logo: Xiaomi.src,
    },
    {
      name: "MOTOROLA",
      logo: Motorola.src,
    },
    {
      name: "APPLE",
      logo: Apple.src,
    },
  ];

  return (
    <div className="flex justify-center my-8 bg-gray-100 py-8 rounded-lg">
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center">
            <div className="w-30 h-30 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300">
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="w-20 h-20 object-contain"
              />
            </div>
            <span className="mt-2 text-sm text-gray-500">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
