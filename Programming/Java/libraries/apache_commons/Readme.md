# Apache Commons

Apache Commons is an Apache project focused on all aspects of reusable Java components.
Composed of 3 parts:-

1. Th Commons Proper - repository of reusable Java components.
2. The Commons Sandbox - A workspace for java components development.
3. The Commons Dormant - A repository of components that are currently inactive.

## Commons IO

It is a library of utilities to assist with developing IO functionality.
Useful for older versions of Java when nio was not developed.
There are six main areas included:-
1. Utility classes - with static methods to perform common tasks
2. Input - useful Input Stream and Reader implementations
3. Output - Useful Output Stream with and Writer implemetations.
4. Filters - various implementations of fie filters.
5. Comparators - various implementations of java.util.Comparator for files.
6. File Monitor - a component for monitoring fie System events.

```java
import org.apache.commons.io.FileUtils;

File source = new File("src.txt");
File target = new File("tgt.txt");

try{
   FileUtils.copyFile(source,target)
} catch(IOException e){
   //body
}
```
