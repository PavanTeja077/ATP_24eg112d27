const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
/*Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
let copyUser={...user}
user.name='pavan'
user.preferences.theme='light'
user.preferences.language="tel"

console.log(user)
console.log(copyUser)