import { Review } from 'src/models/review.entity';
import { MongoRepository } from 'typeorm';
export declare class ReviewService {
    private reviewModel;
    constructor(reviewModel: MongoRepository<Review>);
    addReview(review: any, shipmentId: any, rate: any): Promise<import("typeorm").InsertResult>;
}
