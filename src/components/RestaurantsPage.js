import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const RestaurantCard = ({ restaurant }) => {
  const stars = Array(5).fill(0);
  const rating = Math.round(restaurant.rating);
  
  return (
    <Card className="w-full max-w-xl mx-auto mb-8 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-gray-800">{restaurant.name}</CardTitle>
          <div className="flex items-center">
            <span className="mr-2 font-semibold">{restaurant.rating}</span>
            {stars.map((_, index) => (
              <Star
                key={index}
                size={20}
                className={`${
                  index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <CardDescription className="text-gray-600">
          {restaurant.address}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 italic">"{restaurant.review}"</p>
            <p className="text-gray-500 text-sm mt-2">- {restaurant.reviewer}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-700">Téléphone:</p>
              <p className="text-gray-600">{restaurant.phone}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Site web:</p>
              <p className="text-gray-600 truncate">{restaurant.website}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <p className="text-sm text-gray-600">{restaurant.hours}</p>
      </CardFooter>
    </Card>
  );
};

// ... Rest of the component code ...