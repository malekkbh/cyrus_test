export default {
    getUser:(id) =>`https://api.stackexchange.com/2.2/users/${id}/questions?order=desc&sort=creation&site=stackoverflow` 
}