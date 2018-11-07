import Layout from '../components/layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const TvShow = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link href={`/tv?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

//向自定义组件绑定一个getInitialProps方法，上层的Next.js组件会执行他的异步过程。
TvShow.getInitialProps = async function() {
    //contxt是衔接Next.js包装组件和自定义主键的上下文，包含的参数有asPath、pathname、query

    // 发送异步请求
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')

    // 从response中异步读取数据流
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    // 返回已获取的数据
    return {
        shows: data
    }
}

export default TvShow