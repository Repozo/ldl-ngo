import React, { Component, Fragment } from 'react';

import classes from './About.css';
import img1 from '../images/img-1.png';
import img2 from '../images/img-2.png';
import img3 from '../images/img-3.png';
import img4 from '../images/img-4.png';
import img5 from '../images/img-5.png';
import img6 from '../images/img-6.png';
import logoimg from '../images/logo-image-3.png';
import overlay from '../images/overlay-2.png';

class Aboutus extends Component {
  render() {
    return (
      <Fragment>
        <Fragment>
          <section className='showcase d-flex text-center align-items-center'>
            <div className='overlay'></div>

            <div className='header container text-white'>
              <div className=''>
                <img src={logoimg} className='logo1' alt='' />
              </div>
              <h3 className='display-1'>LIGHT DE LITERACY</h3>
              <p className='display-6'>EDUCATE EMPOWER ENLIGHTEN</p>
            </div>
          </section>
        </Fragment>
        <Fragment>
          <div className='d-flex display-4 justify-content-center'>
            ABOUT US
          </div>
        </Fragment>
        <Fragment>
          <div className='mt-4 about'>
            <section className='container justify-content-center'>
              <div className='row justify-content-center d-flex py-3'>
                <div className='d-block col-xl-3 d-flex align-content-between justify-content-center flex-wrap'>
                  <div className='row'>
                    <img
                      src={img1}
                      className='photo mt-2 d-none d-xl-block'
                      alt=''
                    />
                  </div>
                  <div className='row'>
                    <img src={img2} className='photo mt-2' alt='' />
                  </div>
                  <div className='row'>
                    <img src={img3} className='photo mt-2' alt='' />
                  </div>
                </div>
                <div className='col-xl-6 justify-content-center about-text'>
                  <p>
                    Light de Literacy is a registered NGO with Reg no.
                    S/ND/582/2015 under Society Registration act XXI,1860. An
                    NGO, run by group of socially active, determined and
                    educated youths, aims to educate underprivileged children.
                    We are here with a thought: “Why only we? Why not the
                    children living in slums have an access to quality
                    education?” Neither we nor they chose the families we are
                    born and also there is no such right that bestows the
                    blessing of education upon us… only us. Every time we think
                    of these children, a question arises in our mind- “What if
                    all these facilities and luxury, which we are enjoying,
                    weren’t available to us?” Light de Literacy has been started
                    to provide quality education to underprivileged children. We
                    have been working for children living in slums since 2012
                    and have started working under the name “LIGHT DE LITERACY”
                    since September 27 th , 2014. ‘Light de Literacy’ means
                    “साक्षरता का प्रकाश ” and the tag line “एक आशा नवनिर्माण की”
                    clearly shows our vision for the future guided by the motto
                    Educate * Empower * Enlighten.
                    <br />
                    <br />
                    All the members, close to 1000, of our organization are
                    committed for the welfare of these underprivileged children.
                    We had initiated our work by teaching about 30 children on
                    daily basis at a slum in Pratap Vihar and about 20 children
                    in Samrat Chowk area. Currently, we are teaching around
                    800-1000 children daily at 10 different locations in
                    Ghaziabad, Noida, Greater Noida and Bahraich in
                    collaboration with our colleagues from various institutions
                    and different section of society.
                    <br />
                    <br />
                    Apart from teaching, a number of events, on the occasions of
                    National Festivals, major Festivals, Children’s Day,
                    Teacher’s Day, Environment Day etc. are also conducted by
                    our team so that to enhance their knowledge and spread
                    happiness in their life. Since the financial condition of
                    these children and their families is not good, they don’t
                    have sufficient clothes to cover their bodies against the
                    odds of nature. In this respect, at regular intervals, we
                    distribute clothes among these children and their families.
                    <br />
                    <br />
                    We also organize award ceremony for our children who
                    performed well in their respective classes named ‘Pratibha
                    Samman Samaroh’ where we honour young talents. We organise
                    Sports fest for our kids named UMANG, to aware them about
                    importance of sports in life. Recently, We have initiated a
                    campaign She for She in order to take care of menstrual
                    hygiene of our Kids and their concerned family members.
                  </p>
                </div>
                <div className='d-block col-xl-3 d-flex align-content-between justify-content-center flex-wrap'>
                  <div className='row'>
                    <img
                      src={img4}
                      className='photo mt-2 d-none d-xl-block'
                      alt=''
                    />
                  </div>

                  <div className='row'>
                    <img
                      src={img5}
                      className='photo mt-2 d-none d-xl-block'
                      alt=''
                    />
                  </div>
                  <div className='row'>
                    <img src={img6} className='photo mt-2' alt='' />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Fragment>

        <section className='mt-2 container'>
          <div className='row justify-content-between d-flex mx-1'>
            <a
              className='col-sm-3 mx-1 mt-2 btn btn-danger'
              data-bs-toggle='collapse'
              href='#multiCollapseExample1'
              role='button'
              aria-expanded='false'
              aria-controls='multiCollapseExample1'
            >
              OUR TEAM{' '}
            </a>
            <button
              className='col-sm-3 mx-1 mt-2 btn btn-danger'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#multiCollapseExample2'
              aria-expanded='false'
              aria-controls='multiCollapseExample2'
            >
              CO-FOUNDERS
            </button>
            <button
              className='col-sm-3 mx-1 mt-2 btn btn-danger'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#multiCollapseExample3'
              aria-expanded='false'
              aria-controls='multiCollapseExample3 '
            >
              COORDINATORS
            </button>
          </div>

          <div className='row mt-3'>
            <div className='collapse multi-collapse' id='multiCollapseExample1'>
              <div className='row row-cols-1 row-cols-md-4 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Samiksha Srivastava</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>
                        FOUNDER, Ex-PRESIDENT AND MENTOR
                      </h5>
                      <p className='card-text'>
                        +91-9892154470 samikshasrivastava607@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Shubham Rungta</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>FOUNDER AND MENTOR</h5>
                      <p className='card-text'>
                        +91-7972405161 shubhamrungta93@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>
                      Mr. Kamlendra Pratap Singh
                    </div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>PRESIDENT</h5>
                      <p className='card-text'>
                        +91-7827070467 shakyakamlendra@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Rohit Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>VICE PRESIDENT</h5>
                      <p className='card-text'>
                        +91-8447518304 rohitsinghldl@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row row-cols-1 row-cols-md-4 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Deepali Gupta</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>TREASURER</h5>
                      <p className='card-text'>
                        +91-9643218644 deepaligupta713@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Kuvar Vibhor Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>SECRETARY</h5>
                      <p className='card-text'>
                        +91-9315634529 kuvarvibhor@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Mayank Kumar Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>GENERAL SECRETARY</h5>
                      <p className='card-text'>
                        +91-9559382012 singhmayank0011@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Ankit Pal</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - TREASURER</h5>
                      <p className='card-text'>
                        +91-8851025078 palankit2014@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='collapse multi-collapse' id='multiCollapseExample2'>
              {/* ROW1 */}
              <div className='row row-cols-1 row-cols-sm-3 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Sunny Garg</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Vishesh Kumar</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>
                        Co - Founder And Ex-President
                      </h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Parthivee Chaudhary</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row row-cols-1 row-cols-sm-3 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Alok Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Siddharth Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Vaishali Vishnoi</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row row-cols-1 row-cols-sm-3 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Priya Kumari</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Pragya Porwal</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Shubham Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Co - Founder </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='collapse multi-collapse' id='multiCollapseExample3'>
              <div className='row row-cols-1 mx-auto row-cols-sm-3 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Vaidyanath</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Team JIIT</h5>
                    </div>
                  </div>
                </div>

                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Priyanshu Shukla</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Team Bahraich</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Rishabh Umrao</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Team RKGIT</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row row-cols-1 mx-auto row-cols-sm-3 g-4'>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Ms. Mansi Agarwal</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Team JIIT</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Ashish Rai</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Team ABES EC</h5>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card border-danger mb-3'>
                    <div className='card-header'>Mr. Dheeraj Singh</div>
                    <div className='card-body text-danger'>
                      <h5 className='card-title'>Team ABESIT</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Fragment>
          <footer className='bg-dark footer'>
            <div className=''>
              <img src={logoimg} className='logo' alt='' />
            </div>
            <div className='footer-text'>LIGHT DE LITERACY</div>
            <div className='footer-text'>
              Copyright 2018 Light de Literacy. Designed & developed by Team
              LDL, Privacy Policy
            </div>
          </footer>
        </Fragment>
      </Fragment>
    );
  }
}

export default Aboutus;
