import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        {/* Image */}
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="beautiful beach" />
        </div>

        {/* Info */}
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>

          {/* Button instead of invalid <a> */}
          <button className="btn" onClick={() => alert('Read more clicked')}>
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
