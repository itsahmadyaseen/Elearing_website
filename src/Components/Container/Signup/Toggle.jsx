import {Link} from 'react-scroll'

const Toggle = ({setToggle,link}) => {
    return (
        <li className="list-none cursor-pointer mr-8">
          <Link
            duration={500}
            offset={-50}
            className="font-bold transition-all duration-300"
            onClick={(prev) => setToggle(!prev)}
          >
            {link}
          </Link>
        </li>
      )
}

export default Toggle