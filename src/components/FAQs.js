import React, {useEffect, useState} from 'react';
import axios from 'axios';

function FAQs() {
  const [FAQsData, setFAQsData] = useState([]);
  useEffect(() => {
    try {
      axios.get('http://127.0.0.1:8000/api/FAQs/').then((res) => {
        setFAQsData(res.data);
      });
    } catch (error) {}
  }, []);
  return (
    <div className="container mt-4">
      <h1>FAQs</h1>
      <div class="accordion" id="accordionExample">
        {FAQsData.map((faq) => (
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {faq.question}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
