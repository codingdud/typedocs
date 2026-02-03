// Template Literal Types
type word="world";
type greet=`hello ${word}!`

// When a union is used in the interpolated position, 
// the type is the set of every possible string literal 
// that could be represented by each union member:

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocalIds=`${EmailLocaleIDs|FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
type LocalMessageID=`${Lang}_${AllLocalIds}`
type temp="en_welcome_email_id" extends LocalMessageID ? true : false;


// Intrinsic String Manipulation Types
type Hello="hello world";
type Upper=Uppercase<Hello>;
type AssicCascheKey<Str extends string>=`ID_${Uppercase<Str>}`
type id=AssicCascheKey<"app_key">;
type Lower=Lowercase<Hello>;
type AssicCascheKey2<Str extends string>=`id_${Lowercase<Str>}`
type id2=AssicCascheKey2<"app_key">;
// Capitalize<StringType>
// Uncapitalize<StringType>

