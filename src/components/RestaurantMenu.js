import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MenuItem = ({ item }) => (
  <div className={`p-4 ${item.isSignature ? 'bg-amber-50' : ''} rounded-lg mb-4`}>
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-gray-900 flex items-center">
          {item.name}
          {item.isSignature && (
            <Star className="ml-2 h-4 w-4 fill-amber-400 text-amber-400" />
          )}
        </h4>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      </div>
      <span className="font-medium text-gray-900">{item.price}</span>
    </div>
  </div>
);

const MenuSection = ({ section }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
      {section.name}
    </h3>
    <div className="space-y-4">
      {section.items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const RestaurantMenu = ({ restaurantId, menu }) => {
  if (!menu) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Menu - {menu.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {menu.sections.map((section, index) => (
            <MenuSection key={index} section={section} />
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>⭐ Les plats marqués d'une étoile sont nos spécialités</p>
          <p className="mt-2">Prix en Francs Suisses (CHF), TVA incluse</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantMenu;