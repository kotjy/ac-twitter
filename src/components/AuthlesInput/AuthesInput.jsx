import styles from './AuthesInput.module.css'

const AuthInput = ({type,label,value,onChange,placeholder}) =>{
   return(
     <div className={styles.authInputContainer}>
        <label className={styles.authInputLabel}>{label}</label>
        <div>
          <input 
          className={styles.authInputInput}
          type={type ||'text'}
          value={value || ''}
          placeholder={placeholder || ''} 
          onChange={(event) => onChange?.(event.target.value)}
          />

        </div>

     </div>

   )

}

export default AuthInput