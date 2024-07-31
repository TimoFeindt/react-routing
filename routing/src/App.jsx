import Button from "./Button"
import { LuAlertTriangle, LuBan, LuBookmarkPlus, LuCandy, LuCheck } from "react-icons/lu";

export default function App() {

  const handleClick = () => {
    console.log('test')
  }

  return (
    <>
      <div>
        <Button primary onClick={handleClick} className="mb-10">
          <LuCandy className="mr-1" />
          Main Button
        </Button>
      </div>
      <div>
        <Button secondary>
          <LuBookmarkPlus className="mr-1" />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success >
          <LuCheck className="mr-1"/>
          Success!
        </Button>
      </div>
      <div>
        <Button warning>
          <LuAlertTriangle className="mr-1" />
          Warning!
        </Button>
      </div>
      <div>
        <Button error>
          <LuBan className="mr-1" />
          Error!
        </Button>
      </div>
      <div>
        <Button primary outline>Outlined One</Button>
      </div>
      <div>
        <Button outline rounded>Uuuh Rounded!</Button>
      </div>
    </>
  )
}
