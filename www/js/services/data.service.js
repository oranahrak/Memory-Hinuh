(function () {
  angular.module('MemoryGame').factory('DataService', function () {
    // Might use a resource here that returns a JSON array

    var data = {
      life1: [true, true, true, true],
      subjectnow: 0,
      restartgame: false,
      cards: {}
    }

    /**************************/
    /*the content of the cards */
    /**************************/
    var levels = {
      "level1": {
        cards: {
          terms: [{
              value: "מעמ''ל",
              matched: false,
              index: 0
            },
            {
              value: "שטח כינוס",
              matched: false,
              index: 1
            },
            {
              value: "חמ''ל פר''ח",
              matched: false,
              index: 2
            },
            {
              value: "דף מפקד",
              matched: false,
              index: 3
            },
            {
              value: "פעילות הכנה מנטאלית ערכית",
              matched: false,
              index: 4
            },
            {
              value: "ק.חינוך קולטת",
              matched: false,
              index: 5
            },
            {
              value: "יחידה חוברת",
              matched: false,
              index: 6
            },
            {
              value: "קצינים משוחחים",
              matched: false,
              index: 7
            },
            {
              value: "מעודכנים לשטח",
              matched: false,
              index: 8
            }

          ],
          definitions: [{
              value: "סדר פעולות המתקיים בכלל גופי צה''ל ויחידותיו שמטרתו להכין את הגוף או היחידה לקראת מצב חירום עפ''י התכנון המטכ''לי",
              matched: false,
              index: 0
            },
            {
              value: "שטחים בהם מתבצעת התארגנותם האחרונה של כוחות החטיבה לקראת היציאה לקרב ההתקדמות לעבר שטחי היערכות",
              matched: false,
              index: 1
            },
            {
              value: "חמ''ל פרט וחינוך הדואג לתספיקי הפרט של החיילים ותספיקי החינוך",
              matched: false,
              index: 2
            },
            {
              value: "כינוי לפרסום של דברי מפקד היחידה מעוצבה ומעלה(לחייליו ולקראת הקרב או במהלכו) או בתרגיל ובו הסבר על רקע הפעילות,על חשביותה ועל יעדיה",
              matched: false,
              index: 3
            },
            {
              value: "פעילות הנעשית ע''י היחידה במהלך המעבר משגרה לחירום על מנת להכין את הפרט והמסגרת להתמודדות מנטאלית ערכית אפקטיבית במצבי החירום",
              matched: false,
              index: 4
            },
            {
              value: "ק.החינוך של הכוח הקולטת את סגל החינוך החובר",
              matched: false,
              index: 5
            },
            {
              value: "כוח צבאי המוגדר ת''פ יחידה שאינה יחידת האם לצורך הפעלה אופרטיבית מבצעית",
              matched: false,
              index: 6
            },
            {
              value: "קיום שיח עם מפקדים וחיילים בשטח במטרה לחזק את רוח הלחימה,לתת השראה ולקיים שיח משמעותי הנשען על נסיונים המבצעי כמפקדים בכירים בעבר",
              matched: false,
              index: 7
            },
            {
              value: "שימוש בשיח אקטואלי כבסיס לשיח ערכי בנושאים שונים בהוהבלת המפקד",
              matched: false,
              index: 8
            }
          ]
        }
      },
      "level2": {
        cards: {
          terms: [{
              value: "קולות מהשטח",
              matched: false,
              index: 0
            },
            {
              value: "אורך נשימה",
              matched: false,
              index: 1
            },
            {
              value: "תספיקי אורך נשימה",
              matched: false,
              index: 2
            },
            {
              value: "לבנת ריענון",
              matched: false,
              index: 3
            },
            {
              value: "כלי הסברתי",
              matched: false,
              index: 4
            },
            {
              value: "דוח הערכת מצב חינוכית",
              matched: false,
              index: 5
            },
            {
              value: "סיום משימה",
              matched: false,
              index: 6
            },
            {
              value: "סגירת משימה",
              matched: false,
              index: 7
            },
            {
              value: "תיעוד וסיקור בזמן לחימה",
              matched: false,
              index: 8
            }

          ],
          definitions: [{
              value: "אוסף הנתונים מבוסס על תצפית קונקרטית ולא על פרשנות בלבד",
              matched: false,
              index: 0
            },
            {
              value: "כינוי ליכולת של יחידה מסויימת למלא את משימותיה המבצעיות תוך כדי לחימה רצופה",
              matched: false,
              index: 1
            },
            {
              value: "כלי חינוכי/הסברתי להעברת מסרים בדגשים ערכיים באופן חוויתי, לצד תרומה משמעותית, ללכידות היחידה, תחושבת השייכות של חילייה ולמורל ולרוח ההתגייסות",
              matched: false,
              index: 2
            },
            {
              value: "הפוגה והתרעננות, לשם חזרה בכוחות מחודשים והתארגנות חינוכית וערכית ברמת המסגרת לחיזוק הלכידות והכשירות לחזרה ללחימה",
              matched: false,
              index: 3
            },
            {
              value: "כלי חינוכי המופץ למער''פ במטרה ללקדם שיח בנושאים מוגדרים ע''פ הערכות המצב המתקיימות במטה המחלקה בשיתוף המער''פ",
              matched: false,
              index: 4
            },
            {
              value: "דוח המתאר את תמונת המצב והערכה של היחידה, התערבויות חינוכיות,דגשי ומסרי הסברה שהועברו, אירועים חריגים",
              matched: false,
              index: 5
            },
            {
              value: "החל מהשלב בו המסגרת סיימה את פעילות הלחימה והוגדרו עבורה משימות חדשות או חזרה לשגרה",
              matched: false,
              index: 6
            },
            {
              value: "(סדרת פעולות מאורגנות בשלושה צירים: מקצועי, מנטלי וחינוכי בהם ישתתפו כלל הכוחות המעורבים (סדיר, במילואים, לוחמים ותומכי לחימה",
              matched: false,
              index: 7
            },
            {
              value: "צילום, איסוף מסמכים ופירסומים הקשורים ליחידה, לצורך תיעוד המורשת וחיזוק הגאווה היחידתית",
              matched: false,
              index: 8
            }
          ]
        }
      }
    }

    var subjects = [{
        name: 'שלב ראשון',
        cards: levels["level1"].cards
      },
      {
        name: 'שלב שני',
        cards: levels["level2"].cards
      }
    ]

    //// shffle the array
    function shuffle(array) {
      var m = array.length,
        t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }

    function gameInit(subject) {
      data.cards.terms = shuffle(subject.cards.terms);
      data.cards.definitions = shuffle(subject.cards.definitions);
      console.log(data.cards)
    }

    return {
      subjects: subjects,
      gameInit: gameInit,
      data: data
    };
  });
})();
