import Link from "next/link";
import styles from "./page.module.css";

async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
    data = await data.json();
    return data;
}

export default async function Page(){
    let users = await getUsers();
    return(
        <div className={styles.container}>
            <p className={styles.eyebrow}>Directory / Active Records</p>
            <h1 className={styles.heading}>User List</h1>
            <p className={styles.subheading}>{users.length} records found</p>
            <div className={styles.list}>
                {
                    users.map((item)=>(
                        <div key={item.id} className={styles.userItem}>
                            <span className={styles.userId}>#{item.id}</span>
                            <Link href={`/users/${item.id}`} className={styles.link}>{item.name}</Link>
                            <span className={styles.arrow}>→</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}