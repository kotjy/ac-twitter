import styles from './AuthesInput.module.css'

const AuthInput = ({type,label,value,onChange}) =>{
   return(
     <container className={styles.authInputContainer}>
        <label className={styles.authInputLabel}>{label}</label>
        <div>
          <input 
          className={styles.authInputInput}
          type={type ||'text'}
          value={value} 
          onChange={(event) => onChange?.(event.target.value)}
          />

        </div>

     </container>

   )

}

export default AuthInput