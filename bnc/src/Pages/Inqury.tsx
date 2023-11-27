import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Policy from "../Components/Policy";

function Inqury() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedDelivery, setSelectedDelivery] = useState<string>("");
  const [selectedContainer, setSelectedContainer] = useState<string>("");

  const [policyShow, setPolicyShow] = useState<boolean>(false);

  const [agree, setAgree] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const hanlderEmail = (e: any) => {
    e.preventDefault();

    if (name === "") {
      alert("담당자 성함을 입력해주세요.");
    } else if (phone === "") {
      alert("핸드폰 번호를 입력해주세요.");
    } else if (email === "") {
      alert("이메일을 입력해주세요.");
    } else if (subject === "") {
      alert("제목을 입력해주세요.");
    } else if (message === "") {
      alert("문의내용을 입력해주세요.");
    } else if (!agree) {
      alert("정책에 동의해주세요.");
    } else {
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
              window.location.reload();
            },
            (error) => {
              console.log(error);
            }
          );
      }
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
            <label>
              <span>*</span>담당자 성함
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="phone">
            <label>
              <span>*</span>핸드폰 번호
            </label>
            <input
              type="number"
              name="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
          <div className="email">
            <label>
              <span>*</span>이메일
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="hs-code">
            <label>HS CODE</label>
            <input type="text" name="hscode" />
          </div>
          <div className="delivery">
            <label>운송방법</label>
            <div className="delivery-box">
              <div>
                <input
                  type="checkbox"
                  name="delivery"
                  value="Ocean"
                  checked={selectedDelivery === "ocean"}
                  onChange={() => setSelectedDelivery("ocean")}
                />
                <span>OCEAN</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="delivery"
                  value="AIR"
                  checked={selectedDelivery === "air"}
                  onChange={() => setSelectedDelivery("air")}
                />
                <span>AIR</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="delivery"
                  value="기타"
                  checked={selectedDelivery === "기타"}
                  onChange={() => setSelectedDelivery("기타")}
                />
                <span>기타</span>
              </div>
            </div>
          </div>
          <div className="container">
            <label>운송형태</label>
            <div className="container-box">
              <div>
                <input
                  type="checkbox"
                  name="container"
                  value="FCL"
                  checked={selectedContainer === "FCL"}
                  onChange={() => {
                    setSelectedContainer("FCL");
                  }}
                />
                <span>FCL</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="container"
                  value="LCL"
                  checked={selectedContainer === "LCL"}
                  onChange={() => setSelectedContainer("LCL")}
                />
                <span>LCL</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="container"
                  value="기타"
                  checked={selectedContainer === "기타"}
                  onChange={() => setSelectedContainer("기타")}
                />
                <span>기타</span>
              </div>
            </div>
          </div>

          <div className="subject">
            <label>
              <span>*</span>문의제목
            </label>
            <input
              type="text"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="message">
            <label>
              <span>*</span>문의내용
            </label>
            <textarea
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="agree">
            <input
              type="radio"
              name="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <p onClick={() => setAgree(!agree)}>I Agree to the Terms of the</p>
            <span onClick={() => setPolicyShow(true)}>Privacy Policy</span>
            {policyShow && (
              <Policy PolicyShow={policyShow} setPolicyShow={setPolicyShow} />
            )}
          </div>

          <div className="date">
            <input
              name="date"
              type="text"
              defaultValue={`${new Date().getFullYear()}-${
                new Date().getMonth() + 1
              }-${new Date().getDate()}`}
              style={{ display: "none" }}
            ></input>
          </div>
          {!agree ? (
            <button
              type="submit"
              style={{ pointerEvents: "none", opacity: "0.3" }}
            >
              SEND
            </button>
          ) : (
            <button type="submit">SEND</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Inqury;
