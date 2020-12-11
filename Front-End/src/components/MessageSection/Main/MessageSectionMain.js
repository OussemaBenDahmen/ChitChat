import React, { useEffect, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import MessageElement from "../../StyledComponents/MessageElement";

function MessageSectionMain() {
  const BottomDiv = useRef();
  useEffect(() => {
    BottomDiv.current.scrollIntoView(false);
  }, []);
  return (
    <main className="MessageSectionMain">
      <Scrollbars autoHide hideTracksWhenNotNeeded>
        {[1, 2, 3, 4, 5, 6].map((el, i) => (
          <MessageElement key={i}>
            <img
              className="MessageElementImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
              alt="UserImage"
            />
            <div className="MessageElementContent">
              <div className="MessageSenderNameAndDate">
                <h4 className="MessageSenderName">Oussema Ben Dahmen</h4>
                <h5 className="MessageDate">13:45 AM</h5>
              </div>
              <div className="MessageTxt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                recusandae atque ipsum quo sit ipsa enim animi, commodi totam
                debitis necessitatibus quos eos porro suscipit placeat ex nobis
                libero qui?
              </div>
            </div>
          </MessageElement>
        ))}
        <p ref={BottomDiv}></p>
      </Scrollbars>
    </main>
  );
}

export default MessageSectionMain;
