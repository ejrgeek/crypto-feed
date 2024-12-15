import styles from "@/app/page.module.css";

import { dateFormatter } from "@/utils/formatter";

export default function PostFeed({post}) {
    return (
        <>
        <div className={`${styles.postBox}`}>
            <div className={`${styles.postAuthorLine}`}>
                <span>{post.username} @ {post.author} posted:</span>
            </div>
            <div className={`${styles.postText}`}>
                <blockquote>&#10075;&#10075;{post.text}&#10076;&#10076;</blockquote >
            </div>
            <div className={`${styles.postAuthorLine}`}>
                <span>Posted in: {dateFormatter(post.postedOn)}</span>
            </div>
        </div>
        </>
    );
}