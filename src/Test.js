import useKeyPress from "./useKeyPress.js"

  const detectKeyPress = () => {
    const happyPress = useKeyPress({key:"h"});
    const sadPress = useKeyPress({key:"s"});
    const robotPress = useKeyPress({key:"r"});
    const foxPress = useKeyPress({key:"f"});
  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}


export default Test;