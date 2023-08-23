import React from 'react'
import './Product.scss'

const list = [
  { id: '1', content: 'Environmental Impact.', info: 'By joining Avocet, you actively contribute to reducing landfill waste, conserving natural resources, and mitigating the harmful effects of pollution.' },
  { id: '2', content: 'Sustainable Solutions.', info: 'Our focus on a circular economy means we strive for long-term sustainability, creating products and processes that minimize waste generation.' },
  { id: '3', content: 'Innovation and Technology.', info: 'Embracing the latest innovations and technologies, we ensure the most efficient and effective waste-to-wealth processes.' },
  { id: '4', content: 'Community-driven.', info: `Avocet is not just a platform; it's a community of like-minded individuals, businesses, and organizations coming together for a cleaner, greener future.` }
]

const Product = () => {
  return (
    <section className=' --text-center --mt product'>
      <h2>Why Choose Avocet?</h2>

      <div className='drawer'>
        {list.map(({ id, content, info }) => (
          <div key={id} className='details --flex-center'>
            <h2>{content}</h2>
            <p className='--mt'>{info}</p>
            {/* <button className='--btn --btn-primary'>Learn more</button> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product
