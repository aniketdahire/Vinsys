import java.util.*;

public class CollectionFw {

    public static void main(String[] args) {
        
        ArrayList<Integer> tempList = new ArrayList<>();
        // List<Integer> rem = Arrays.asList(10,20);
        // List<Integer> add = Arrays.asList(50,60);

        tempList.add(10);
        tempList.add(20);
        tempList.add(30);
        tempList.add(40);
        tempList.add(30);

        System.out.println(tempList);
        tempList.remove(1);                     //will remove the element from index 1
        tempList.remove(tempList.indexOf(30));      //will remove the first instance of that element in the list
        System.out.println("Remove : "+tempList);
        tempList.sort((o1,o2)->o1-o2); // to sort the array 
        System.out.println(tempList);





// to sort the stirng 
        ArrayList<String> names = new ArrayList<>();

        names.add("aniket");
        names.add("tejas");
        names.add("vedant");
        names.add("vishwajeet");


        names.sort((o1,o2)->o1.compareTo(o2));
        Collections.sort(names);

        System.out.println(names);

        
    }
}