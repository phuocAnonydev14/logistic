import dataJson from "./about.json"

export default function AboutPage() {
  const {aboutSection, coreValues, testimonials} = dataJson
  
  return (
    <div>
      {/* === About Section === */}
      <section id="about" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {aboutSection.title}
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src={aboutSection.imageUrl} alt="About" className="rounded-lg shadow-xl" />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{aboutSection.missionTitle}</h3>
              <ul className="space-y-4">
                {aboutSection.missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
              
              <p className="mt-6 text-gray-600">{aboutSection.description}</p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                {aboutSection.highlights.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                      <i className="fas fa-users text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* === Core Values === */}
      <section id="values" className="py-16 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{coreValues.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">{coreValues.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <i className={`fas fa-${value.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="md:col-span-2 lg:col-span-3 gradient-bg rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between mt-6">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">{coreValues.cta.title}</h3>
                <p className="text-blue-100">{coreValues.cta.description}</p>
              </div>
              <a href={coreValues.cta.buttonLink} className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
                {coreValues.cta.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* === Testimonials === */}
      <section className="py-16 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{testimonials.title}</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.testimonialsList.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
