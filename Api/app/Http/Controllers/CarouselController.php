<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CarouselController extends Controller
{
    public function __construct()
    {
        $this->middleware('api')->only(['store', 'update', 'destroy']);
    }

    public function index()
    {
        // $carouselImages = Carousel::all();
        $carouselImages = Carousel::orderBy('created_at', 'desc')->get();
        $carouselImages->transform(function ($image) {
            $image->full_path = asset("storage/" . $image->image_path);
            return $image;
        });
        return response()->json($carouselImages);
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
            'title' => 'required',
            'description' => 'required',
        ]);

        $title = $request->input('title');
        $cleanTitle = preg_replace("/[^a-zA-Z0-9]+/", "", $title);

        $imageName = $cleanTitle . '.jpg';

        $imagePath = $request->file('image')->storeAs('public/carousel', $imageName);

        $carouselImage = Carousel::create([
            'title' => $title,
            'description' => $request->input('description'),
            'image_path' => str_replace('public/', '', $imagePath),
        ]);

        $carouselImage->full_path = asset("storage/{$imagePath}");

        return response()->json($carouselImage, 201);
    }

    public function update(Request $request, Carousel $image)
    {
        $request->validate([
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($image->image_path);

            $imagePath = $request->file('image')->store('public/carousel', 'public');
            $image->update([
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'image_path' => str_replace('public/', '', $imagePath),
            ]);

            $image->full_path = asset("storage/{$imagePath}");
        } else {
            $image->update([
                'title' => $request->input('title'),
                'description' => $request->input('description'),
            ]);
        }

        return response()->json($image);
    }

    public function destroy(Carousel $image)
    {
        Storage::disk('public')->delete($image->image_path);

        $image->delete();

        return response()->json(null, 204);
    }
}
