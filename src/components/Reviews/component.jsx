import { Feedback } from 'components/Feedback/component'

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
      <Feedback />
    </div>
  )
}
