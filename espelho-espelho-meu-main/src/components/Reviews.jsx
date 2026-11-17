import './Reviews.css'
import reviews from '../data/reviews.json'

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__header">
        <h2>Reviews dos leitores</h2>
        <span>O que seus amigos estão lendo</span>
      </div>

      <div className="reviews__grid">
        {reviews.map((review) => (
          <article className="review" key={review.id}>
            <img
              className="review__book"
              src={review.image}
              alt={`Capa de ${review.title}`}
            />

            <div className="review__content">
              <strong>@{review.user}</strong>

              <div className="review__rating">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>

              <h3>{review.title}</h3>

              <p>“{review.text}”</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews