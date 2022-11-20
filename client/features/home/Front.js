import React, {useState} from "react";
import { useSpring, animated, config } from 'react-spring'
import { MonthPicks, YearPicks } from '../index'

const Front = () => {
const [flip, set] = useState(false)
const words=[<MonthPicks/>,<YearPicks/>]
const { scroll } = useSpring({
    scroll: (words.length - 1) * 450,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 2000,
    config: config.molasses,
    onRest: () => set(!flip),
})

return(
    <animated.div
    style={{
      position: 'relative',
      top:'8px',
      width: '100%',
      height: 360,
      overflow: 'auto'
    }}
    scrollTop={scroll}>
    {words.map((word, i) => (
      <div
        key={`${word}_${i}`}
        style={{ width: '100%', height: 360, textAlign: 'center' }}>
        {word}
      </div>
    ))}
  </animated.div>
)
}

export default Front;