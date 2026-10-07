/**
 * NOTE: You could also use switch statements
 *       or use if-else statements, or arrays.
 * 
 *       Using arrays or objects [as below]
 *       requires that you be deliberate in how
 *       you design your array/object.
 *
 *       Now we can simply update our tree in
 *       this file instead of having 20 of the
 *       same file. We only have to go to one
 *       place to update the tree itself and
 *       we only have one HTML file to tweak
 *       our design.
 */

const decisionTree = {
                "question": "Is it a team sport?",
                "yes": {
                        "question": "Does it use a ball?",
                        "yes": {
                                "question": "Is the ball round?",
                                "yes": {
                                        "answer": "Football"
                                },
                                "no": {
                                        "answer": "Rugby"
                                }
                        },
                        "no": {
                                
                                "question": "Is it played on land?",
                                "yes": {
                                        "answer": "Relay"
                                },
                                "no": {
                                        "answer": "Kayaking"
                                }        
                        }
                },
                "no": {
                        "question": "Is it a violent sport?",
                        "yes": {
                                "question": "Does it involve killing?",
                                "yes": {
                                        "answer": "Hunting"
                                },
                                "no": {
                                        "answer": "Boxing"
                                }
                        },
                        "no": {
                                "question": "Is it a sedentry sport?",
                                "yes": {
                                        "answer": "Chess"
                                },
                                "no": {
                                        "answer": "Powerlifting"
                                }
                        }
                }
};

let currentNode = decisionTree;

const traverseTree = (element) => {
        // get the text in the button we just clicked
        // which will be a 'yes' or a 'no'
        const answer = element.innerText;

        // get the next set of question and answers
        // using the object created in lines 11-33
        currentNode = currentNode[answer];

        // update the question but only once we make 
        // sure we haven't got an answer yet
        if (currentNode["answer"] === undefined) {
                let question = document.getElementById("h1-title");
                question.innerText = currentNode['question'];
        }
        // but if we reached an answer, we remove the
        // 2 buttons and instead display an answer
        else {
                let question = document.getElementById("h1-title");
                question.innerText = currentNode['answer'];
                document.getElementById("yes").remove();
                document.getElementById("no").remove();
        }
}