

const Separator = (props) => {
   return (<li className={`timeline-separator ${props.className || ""}`} style={props.style || {}}>
      <div className="timeline-separator-text">
         {props.children}
      </div>
   </li>)
}

const TimelineCard = (props) => {
   console.log("PROPS",props)
   return (
     <li
       className={` ${props.className || ""}`}
       style={props.style || {}}
     >
       <div className={`timeline-badge ${props.variant ? "bg-"+props.variant : ""}`}>{props.icon}</div>
       
       <div className="timeline-panel">
       <div className="popover left">
         <div className="arrow"></div>
         <div className="popover-content">{props.children}</div>
       </div>
       </div>
     </li>
   );
}

const Timeline = (props) => {
   return <ul className={`timeline ${props.className || ""}`} style={props.style || {}}>
      {props.children}
   </ul>
}

Timeline.Separator = Separator;
Timeline.Card = TimelineCard;

export default Timeline;