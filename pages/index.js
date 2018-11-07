import Link from 'next/link'
import Layout from '../components/layout'

const SubLink = props => (
    <li className="list">
        <Link as={`p/${props.as}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h2>Information</h2>
        <SubLink as="first-post" title="First Post"/>
        <SubLink as="first-post" title="Second Post"/>
        <SubLink as="first-post" title="Third Post"/>
        <style jsx>{`
            h2{
                font-family: "Arial";
            }
        `}</style>
        <style jsx global>{`
            .list{
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
    </Layout>
)