import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/models/review.entity';
import { MongoRepository } from 'typeorm';

export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewModel: MongoRepository<Review>,
  ) {}
  async addReview(review, shipmentId, rate) {
    return this.reviewModel.insert({
      content: review,
      shipment_id: shipmentId,
      rate: Number(rate),
    });
  }
}
