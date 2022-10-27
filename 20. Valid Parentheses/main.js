/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    let stck = []
    let valid = true;
    
    for (let i = 0; i < s.length && valid; i++) {
        let ch = s[i];

        if (ch === '(' || ch === '{' || ch === "[") {
            stck.push(ch);
        } else if (ch === ')' || ch === ']' || ch === '}') {

            if (!stck.length) {
                valid = false;
            }

            let last = stck.pop();
            switch (ch) {
                case ')': {

                    if (last != '(') {
                        valid = false
                    }
                    break;
                }
                case ']': {
                    if (last != '[') {
                        valid = false;
                    }
                    break;
                }
                case '}': {
                    if (last != '{') {
                        valid = false;
                    }
                    break;
                }

            }
        }
    }

    if (stck.length)
        return false;
    return valid;
};