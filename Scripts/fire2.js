
  
function selectalladat()
{
    firebase.database().ref('test_table').once('value',
        function(all)
        {
            all.forEach(
                function(current)
                {
                    let name=current.val().NameOftest_table;
                    let price=current.val().pricev;
                    let continentV=current.val().section;
                    let filename=current.val().image;
                    let dayv=current.val().count_day;
                    let fromv=current.val().from;
                    let tov=current.val().to;
                    AddItemsToTable(name,price,continentV,filename,dayv,fromv,tov);

                }
            );
        }
    )
}

window.onload=selectalladat;
let number=1;
function AddItemsToTable(name,price,continentV,filename,dayv,fromv,tov)
{
    let div =document.getElementById('one');
    

    let list =document.getElementById('listt');
    list.innerHTML +=
    `
<script src="js/fire.js"></script>

    <li class="list-group-item">

    <span class="text-danger">        (${number++})      </span><span>${continentV}</span>    -----price :       <span class="text-danger">$ ${price} </span>

    </li>

    `;

}

   

