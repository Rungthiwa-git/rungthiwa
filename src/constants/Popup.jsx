
import PropTypes from 'prop-types';

function Popup(props) {
    return (props.trigger) ? (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="min-[560px]:bg-none min-[560px]:w-3/4 mx-5 relative p-8 bg-white rounded-lg shadow-lg flex justify-center items-center">
          <button className="min-[560px]:mt-10 absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 rounded-full px-3 py-1" onClick={() => props.setTrigger(false)}>close</button>
          {props.children}
        </div>
      </div>
    ) : "";
  }
  

// ตรวจสอบ props ที่ถูกส่งเข้ามา
Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,  // กำหนดให้ trigger เป็น boolean และต้องมี
  children: PropTypes.node,           // กำหนดให้ children เป็น node (สามารถเป็นอะไรก็ได้ที่ React สามารถเรนเดอร์)
  setTrigger: PropTypes.func.isRequired
};

export default Popup;
