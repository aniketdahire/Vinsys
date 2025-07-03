public class callStack {
    public static int sum(int x, int y) {
        return x + y;
        System.out.println(x);
        System.out.println(y);
       
    }

    public static void main(String[] args) {
        int a = 5;
        int b = 6;
        int c = sum(a, b);
        System.out.println(c);
    }
}


/*
 * 📚 Call Stack Theory (Java)
 * ---------------------------
 * 1. The call stack is a special memory area where Java stores method calls.
 * 2. It follows the LIFO (Last In, First Out) principle.
 * 3. When a method is called, it is pushed onto the stack.
 * 4. Once the method finishes execution, it is popped off the stack.
 * 
 * ▶ Example Flow:
 *    - main() method is pushed first.
 *    - main() calls sum(x, y), so sum() is pushed.
 *    - sum() returns the result and is popped.
 *    - Execution goes back to main(), then it ends.
 * 
 * ✅ The call stack helps the JVM track what part of the code is currently running.
 */


// after the return statement it will ignore all below of return (it will not execute any after return ) 

// public class callStack {
//     public static int sum(int x, int y) {
//         return x + y;
//         System.out.println(x); // unreachable code 
//         System.out.println(y); // unreachable code 
//     }

//     public static void main(String[] args) {
//         int a = 5;
//         int b = 6;
//         int c = sum(a, b);
//         System.out.println(c);
//     }
// }