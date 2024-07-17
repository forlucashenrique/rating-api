
import { Types } from "mongoose";
import { RatingModel } from "../models/Rating";


type Rating = {
    userId: Types.ObjectId;
    rating: number;
    comment: string;
}

export const executeCreateRating = async (rating: Rating) => {
    const ratingCreated = await RatingModel.create(rating);

    return ratingCreated
}

export const execGetRatings = async () => {
    const ratings = await RatingModel.find();

    return ratings;
}

export const execGetRating = async (id: string) => {
    const rating = await RatingModel.findById(id);

    return rating;
}

export const execUpdateRating = async (id: string, rating: Rating) => {
    const ratingUpdated = await RatingModel.findByIdAndUpdate(id, rating, { new: true });

    return ratingUpdated;
}

export const execDeleteRating = async (id: string) => {
    const ratingDeleted = await RatingModel.findByIdAndDelete(id);

    return ratingDeleted;
}