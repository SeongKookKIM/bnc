import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Inqury() {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleAnswerChange = (e: any) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setSelectedAnswer(value);
    } else if (selectedAnswer === value) {
      setSelectedAnswer("");
    }
  };

  const hanlderEmail = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_upgzrql",
          "template_1134p8n",
          formRef.current,
          "-y1Y2OzwF7TWsdcV9"
        )
        .then(
          (result) => {
            console.log(result);
            window.location.reload();
          },
          (error) => {
            console.log("Answer Fail!");
          }
        );
    }
  };
  return (
    <div className="inqury">
      {/* 견적요청 배너 */}
      <div className="inqury-banner">
        <div className="inqury-banner-inner-bg"></div>
        <div className="inqury-banner-inner">
          <strong>Request a Quote</strong>
        </div>
      </div>
      {/* 견적요청 폼 */}
      <div className="inqury-inner">
        <strong>견적요청</strong>
        <form
          ref={formRef}
          onSubmit={(e) => {
            hanlderEmail(e);
          }}
        >
          <div className="name">
            <label>담당자 성함</label>
            <input type="text" name="name"></input>
          </div>
          <div className="phone">
            <label>핸드폰 번호</label>
            <input type="text" name="phone"></input>
          </div>
          <div className="email">
            <label>이메일</label>
            <input type="text" name="email"></input>
          </div>
          <div className="delivery">
            <label>물류방법</label>
            <div className="delivery-box">
              <div>
                <input type="checkbox" name="delivery" value="Ocean" />
                <span>Ocean</span>
              </div>
              <div>
                <input type="checkbox" name="delivery" value="AIR" />
                <span>AIR</span>
              </div>
              <div>
                <input type="checkbox" name="delivery" value="none" />
                <span>none</span>
              </div>
            </div>
          </div>
          <div className="container">
            <label>Container</label>
            <div className="container-box">
              <div>
                <input type="checkbox" name="container" value="FCL" />
                <span>FCL</span>
              </div>
              <div>
                <input type="checkbox" name="container" value="LCL" />
                <span>LCL</span>
              </div>
              <div>
                <input type="checkbox" name="container" value="none" />
                <span>none</span>
              </div>
            </div>
          </div>
          <div className="hs-code">
            <label>HS CODE</label>
            <input type="text" name="hscode" />
          </div>
          <div className="message">
            <label>문의내용</label>
            <textarea name="message"></textarea>
          </div>

          <div className="date">
            <input name="date" type="text" style={{ display: "none" }}></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inqury;
