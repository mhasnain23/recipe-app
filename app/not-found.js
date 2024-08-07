import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h1>the page could not find.</h1>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound