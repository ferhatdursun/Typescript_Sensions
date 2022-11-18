//!  import job from "./job";

// import { default as _job } from "./job";

export {default as job } from "./job"  //? Bu sekilde direkt cikartip export ile de genele acmis oluyoruz.

export { default as Person, Student } from "./person"

export * from "./person" //! Bu sekilde de person.ts de ne varsa cikartmis oluyoruz!



// export const job = _job; //? (ikinci import) job.ts den buraya _job ile aldigimizi burada job olarak adlandirip export ile genele actik.

//! job.isim; (1. import icin) Bu sekilde job.ts de export default icerisinde tanimlanmis olanlara ulasabiliyoruz!!!!
