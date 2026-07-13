// import styles from "./page.module.css";

// async function getUser(id){
//     let data = await fetch(`http://localhost:3000/api/users/${id}`, { cache: "no-store" });
//     data = await data.json();
//     return data.result;
// }


// export default async function Page({ params }){
//     const { userid } = await params;
//     const user = await getUser(userid);

//     return(
//         <div className={styles.container}>
//             <p className={styles.eyebrow}>Record Lookup</p>
//             <h1 className={styles.heading}>User Detail</h1>
//             <div className={styles.card}>
//                 <p className={styles.name}>{user.name}</p>
//                 <div className={styles.row}>
//                     <span className={styles.label}>ID</span>
//                     <span className={styles.value}>{user.id}</span>
//                 </div>
//                 <div className={styles.row}>
//                     <span className={styles.label}>Email Address</span>
//                     <span className={styles.value}>{user.email}</span>
//                 </div>
//                 <div className={styles.row}>
//                     <span className={styles.label}>Age</span>
//                     <span className={styles.value}>{user.age}</span>
//                 </div>
//             </div>
//         </div>
//     )
// }


import styles from "./page.module.css";
import { user } from "@/utlis/db";

export default async function Page({ params }){
    const { userid } = await params;
    const userData = user.find((item) => item.id == userid);

    return(
        <div className={styles.container}>
            <p className={styles.eyebrow}>Record Lookup</p>
            <h1 className={styles.heading}>User Detail</h1>
            <div className={styles.card}>
                <p className={styles.name}>{userData.name}</p>
                <div className={styles.row}>
                    <span className={styles.label}>ID: </span>
                    <span className={styles.value}>{userData.id}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.label}>Email Address: </span>
                    <span className={styles.value}>{userData.email}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.label}>Age: </span>
                    <span className={styles.value}>{userData.age}</span>
                </div>
            </div>
        </div>
    )
}