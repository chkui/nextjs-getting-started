import {withRouter} from 'next/router'
import Layout from '../components/layout'
//加载样式
import style from './post.scss'

const Page = withRouter((props) => {
    console.log(style)
    return (
        <Layout>
            <h3 className={style.header}>Post Page</h3>
            <p>Info:{props.router.query.title}</p>
        </Layout>
    )
})

export default Page