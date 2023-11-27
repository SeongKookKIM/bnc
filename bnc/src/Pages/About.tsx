import React from "react";

function About() {
  return (
    <div className="about">
      {/* 회사소개 배너 */}
      <div className="about-banner">
        <div className="about-banner-inner-bg"></div>
        <div className="about-banner-inner">
          <strong>About BNC LOGISTICS</strong>
        </div>
      </div>
      <div className="about-inner">
        {/* 회사소개 배너 아래- */}
        <div className="about-inner-title">
          <p>
            Established in 1965 in Stuttgart, Germany, EMO Trans has been on a
            path of continued expansion and success for over 50 years. Now with
            over 100 EMO Trans offices in 24 countries and 250+ network offices
            in 120 countries covering 6 continents, our solid infrastructure
            ensures that we can deliver exceptional logistics services to
            customers large and small.
          </p>
          <p>
            We are a multi-national privately owned company, deeply invested in
            understanding and internalizing the needs and goals of our
            customers. Our goal is to forge partnerships, ensuring that we are
            able to facilitate the most efficient, effective supply chain
            solutions possible.
          </p>
          <p>
            Global Logistics is what we love doing. Some of our customers have
            been with us for decades, they have stayed because they recognize
            that beyond rate tariffs and automated processes, the relationships
            we build add value.
          </p>
        </div>

        {/* 회사소개 introduction */}
        <div className="about-introduction-box">
          <div className="network introduction">
            <div className="introduction-image">
              <img src="/assets/image/about-network.jpg" alt="network" />
            </div>
            <div className="introduction-content-wrapper">
              <strong>Global Network</strong>
              <div className="introduction-content">
                <p>
                  The EMO Trans network is a tightly coordinated group of highly
                  vetted partners with whom we develop products and strategies
                  to deliver comprehensive and reliable service on a global
                  scale.
                </p>
                <p>
                  Our network allows us to be extremely effective locally.
                  Whether it’s expediting a shipment through local knowledge of
                  regulations or having someone who can communicate with known
                  contacts directly about your shipment while it is being
                  processed, you can be confident that your shipment is in the
                  best possible hands.
                </p>
              </div>
            </div>
          </div>
          <div className="values introduction">
            <div className="introduction-image">
              <img src="/assets/image/about-value.jpg" alt="value" />
            </div>
            <div className="introduction-content-wrapper">
              <strong>Core Values</strong>
              <div className="introduction-content">
                <p>
                  Success by Performance is both a motto and a method. Constant
                  investment and focus on customer needs has brought us to where
                  we are today and will continue to carry us into the future.
                </p>
                <p>
                  Teamwork is key. By trusting our employees and encouraging
                  collaboration, we give them the tools and resources they need
                  for success. Our people tend to stick around longer because of
                  our positive culture. We appreciate the loyalty of our
                  employees and believe in treating everyone with dignity and
                  respect.
                </p>
                <p>
                  We are fiscally responsible and believe that financial
                  stability is the right of our customers and employees. Your
                  cargo and their jobs will never be at risk due to bad
                  financial planning or reckless decisions.
                </p>
                <p>
                  EMO Trans is a family owned business and, as we grow, we work
                  hard to keep the same family values and ethics that we have
                  always had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 회사소개  customer*/}
      <div className="about-customer">
        {/* First */}
        <div className="about-customer-box first">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>Customer Service</strong>
              <div className="about-content">
                <p>
                  Success by Performance is a motto that inspires our employees
                  in everything they do. We strive to provide a level of service
                  and support for our customers that is unsurpassed. Our
                  employees will get to know you and your business and, by
                  increasing our knowledge and understanding of your processes,
                  we can put the full weight of our infrastructure to work to
                  help you achieve your goals.
                </p>
                <p>
                  We empower our employees to rise to customer challenges
                  locally, with middle management oversight reaching into every
                  corner of the organization. This means our local branches can
                  act independently and dynamically to cater to your needs.
                </p>
                <p>
                  Our customer retention rates are higher than average. That
                  tells you something about our level of service and the caliber
                  of people we have working for us. We go the extra mile, and we
                  are with you every step of the way.
                </p>
              </div>
            </div>
            <div className="customer-image"></div>
          </div>
        </div>
        {/* Second */}
        <div className="about-customer-box second">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>Customized Global Logistics</strong>
              <div className="about-content">
                <p>
                  When things are tailored specifically to you, they fit better!
                  Our extensive knowledge and experience allow us to customize
                  the services we provide you, to better fit your needs and
                  requirements.
                </p>
                <p>
                  With our customized approach, we can make a real difference in
                  your logistics processes. From the very first contact you will
                  have with our sales or customer service teams, you will notice
                  that our people ask a lot of questions. This is because they
                  are deeply interested in how you do business. That curiosity
                  continues with our operations people as well. This approach
                  doesn’t stop at our borders – all of our network partners are
                  carefully vetted to be like-minded.
                </p>
                <p>
                  Our network allows us to collaborate on a global scale. Our
                  local offices and extended network give us the kind of
                  coverage that allow us flexibility when you need it and
                  expedited services when they are required. We have you
                  covered.
                </p>
              </div>
            </div>
            <div className="customer-image"></div>
          </div>
        </div>
        {/* Third */}
        <div className="about-customer-box third">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>Financial Stability</strong>
              <div className="about-content">
                <p>
                  EMO Trans currently operates with a yearly revenue of $500+
                  million (USD). We are privately owned and are not dependent on
                  any bank loans to operate. Expansion is paid for out of our
                  own pockets. Company profit is consistently reinvested by the
                  owners to fund expansion and projects. Profits are also shared
                  with employees at every level through commission and bonus
                  programs.
                </p>
                <p>
                  This combination of profit sharing and empowerment means that
                  we have many long-term employees who are able to offer
                  experience and expertise, as well as long-term relationships
                  with our customers.
                </p>
                <p>
                  We have positive, well-controlled cash flow. Our commitment to
                  fiscally sound practices means that your freight will never be
                  at risk because we’ve made bad decisions. Your cargo is safe
                  with us, in every sense of the word!
                </p>
              </div>
            </div>
            <div className="customer-image"></div>
          </div>
        </div>
      </div>

      {/* 회사소개 견적요청 링크 */}
      <div className="about-contact">
        <div className="about-contact-inner">
          <div className="contact-content">
            <strong>Work With Us</strong>
            <p>
              최고의 마케팅 그룹 에코마케팅에서 <br className="mobile" /> 놀라운
              매출 성장을 경험하세요.
            </p>
            <button type="button">견적 요청하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
