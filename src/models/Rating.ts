import { Schema, model, Types } from "mongoose";

type Rating = {
    userId: Types.ObjectId;
    comment: string;
    rating: number;
}


const RatingSchema = new Schema<Rating>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export const RatingModel = model<Rating>('Rating', RatingSchema);


