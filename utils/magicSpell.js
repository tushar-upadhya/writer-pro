export function magicSpell() {
  let earlyCount = document.getElementById("textarea").value.length;
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" good ", " outstanding ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Good ", " Outstanding ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" GOOD ", " OUTSTANDING ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" new ", " latest ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" New ", " Latest ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" NEW ", " LATEST ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" this means ", " this actively illustrates that  ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" This means ", " This actively illustrates that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" THIS MEANS ", " THIS ACTIVELY ILLUSTRATES THAT ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" because ", " the reason for this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Because ", " The reason for this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" BECAUSE ", " THE REASON FOR THIS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" so ", " thus, the conclusion is that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" So ", " Thus, the conclusion is that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" SO ", " THUS, THE CONCLUSION IS THAT ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" and ", " as well as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" And ", " As well as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" AND ", " AS WELL AS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" linking ", " bridging the gap ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Linking ", " Briding the gap ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" LINKING ", " BRIDGING THE GAP ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " in conclusion ",
      " to sum up everything that has been stated "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " In conclusion ",
      " To sum up everything that has been stated "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " In Conclusion ",
      " To sum up everything that has been stated "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " IN CONCLUSION ",
      " TO SUM UP EVERYTHING THAT HAS BEEN STATED "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" also ", " in addition to this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Also ", " In addition to this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" ALSO ", " IN ADDITION TO THIS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" yet ", " on the other hand ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Yet ", " On the other hand ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" YET ", " ON THE OTHER HAND ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" about ", " in regards to ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" About ", " In regards to ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" ABOUT ", " IN REGARDS TO ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" even though ", " be that as it may ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Even though ", " Be that as it may ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" EVEN THOUGH ", " BE THAT AS IT MAY ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" until ", " until such time as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Until ", " Until such time as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" UNTIL ", " UNTIL SUCH TIME AS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " this suggest ",
      " therefore elucidating the impression that "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " this suggests ",
      " therefore elucidating the impression that "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " This suggests ",
      " therefore elucidating the impression that "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " THIS SUGGESTS ",
      " THEREFORE ELUCIDATING THE IMPRESSION THAT "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" this means ", " this actively demonstrates that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" it means ", " it actively demonstrates that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " in conclusion to ",
      " to sum up everything that has been stated so far "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " In conclusion to ",
      " To sum up everything that has been stated so far "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" for ", " for the exact purpose of ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" For ", " For the exact purpose of ");
  let finalCount = document.getElementById("textarea").value.length;
  if (finalCount - earlyCount > 0) {
    alert(
      "Magic Spell [BETA] applied, " +
        (finalCount - earlyCount) +
        " Characters added, Use it only 1 time per article"
    );
  } else {
    alert("Unable to apply Magic Spell, Add more suitable content");
  }
}
