import React from 'react';
import Link from 'next/link';
import AccordionItem from '../accordion/accordion-item';

const TermsandConditionArea = () => {
  return (
    <section className="faq-section position-relative pt-100 lg-pt-80">
      <div className="container">
        <ul className="nav nav-tabs border-0 justify-content-center" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab"></button>
          </li>
        </ul>
        <div className="bg-wrapper mt-60 lg-mt-40">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" role="tabpanel" id="fc1">
              <div className="accordion accordion-style-two" id="accordionTwo">
                <AccordionItem id='one' title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
                <AccordionItem isShow={true} id='two' title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
                <AccordionItem id='three' title='What do you look for in a founding team?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
                <AccordionItem id='four' title='Do you recommend Pay as you go or Pre pay?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
                <AccordionItem id='five' title='What do I get for $0 with my plan?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
              </div>
            </div>

           

          </div>
        </div>

        <div className="text-center border-bottom pb-150 lg-pb-50 mt-60 lg-mt-40 wow fadeInUp">
          <div className="title-three mb-30">
            <h2 className="fw-normal">Don’t get your answer?</h2>
          </div>
          <Link href='/contact' className="btn-one">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default TermsandConditionArea;