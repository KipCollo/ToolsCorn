# Caching

Caching is a way to store frequently needed information so that it’s readily available when needed.
Although Spring doesn’t implement a cache solution, it offers declarative support for caching that integrates with several popular caching implementations.


`Enabling cache support`: 
Spring’s cache abstraction comes in two forms:

1. Annotation-driven caching
2. XML-declared caching

The most common way to use Spring’s cache abstraction is to annotate methods with annotations like @Cacheable and @CacheEvict.

Before you can start applying caching annotations in your beans, you must enable Spring’s support for annotation-driven caching. If you’re using Java configuration,
you can enable annotation-driven caching by adding @EnableCaching to one of your configuration classes.


```java
@Configuration
@EnableCaching
public class CachingConfig {
   @Bean
   public CacheManager cacheManager() {
      return new ConcurrentMapCacheManager();
   }
}
```

If you’re configuring your application with XML, you can enable annotation-driven caching with the <cache:annotation-driven> element from Spring’s cache namespace.

Under the covers, @EnableCaching and <cache:annotation-driven> work the same way. They create an aspect with pointcuts that trigger off of Spring’s caching annotations. Depending on the annotation used and the state of the cache, that aspect will fetch a value from the cache, add a value to the cache, or remove a value from the cache.


Cache managers are the heart of Spring’s cache abstraction, enabling integration with one of several popular caching implementations.
In this case, a ConcurrentMapCacheManager is declared. This simple cache manager uses a java.util.concurrent.ConcurrentHashMap as its cache store. Its simplicity makes it a tempting choice for development, testing, or basic applications. But because its cache storage is memory-based and thus tied to the lifecycle of the application, it’s probably not an ideal choice for larger production applications.
Fortunately, several great cache-manager options are available.


`Configuring a cache manager`:
Out of the box, Spring 3.1 comes with five cache-manager implementations:
1. SimpleCacheManager
2. NoOpCacheManager
3. ConcurrentMapCacheManager
4. CompositeCacheManager
5. EhCacheCacheManager

Spring 3.2 introduced another cache manager for working with JCache (JSR-107) based cache providers. Outside of the core Spring Framework, Spring Data offers two
more cache managers:
1. RedisCacheManager (from Spring Data Redis)
2. GemfireCacheManager (from Spring Data GemFire)



## USING REDIS FOR CACHING

Spring Data Redis offers RedisCacheManager, an implementation of CacheManager.
RedisCacheManager works with a Redis server via a RedisTemplate to store cache entries in Redis.
To use RedisCacheManager, you’ll need a RedisTemplate bean and a bean that’s an implementation of RedisConnectionFactory (such as JedisConnectionFactory).


```java
@Configuration
@EnableCaching
public class CachingConfig {
   @Bean
   public CacheManager cacheManager(RedisTemplate redisTemplate) {
      return new RedisCacheManager(redisTemplate);
   }

   @Bean
   public JedisConnectionFactory redisConnectionFactory() {
   JedisConnectionFactory jedisConnectionFactory = new JedisConnectionFactory();
   jedisConnectionFactory.afterPropertiesSet();
      return jedisConnectionFactory;
   }

   @Bean
   public RedisTemplate<String, String> redisTemplate(
      RedisConnectionFactory redisCF) {
   RedisTemplate<String, String> redisTemplate =
      new RedisTemplate<String, String>();
   redisTemplate.setConnectionFactory(redisCF);
   redisTemplate.afterPropertiesSet();
   return redisTemplate;
   }
}
```

## Cache Annoations

Annotations and supporting classes for declarative cache management. Hooked into Spring's cache interception infrastructure via CacheOperationSource.
Spring’s caching abstraction is largely built around aspects.When you enable caching in Spring, an aspect is created that triggers off one or more of Spring’s caching annotations.

`@Cacheable`- indicates that the result of invoking a method (or all methods in a class) can be cached.
`@CacheEvict` -indicates that a method (or all methods on a class) triggers a cache evict operation.
`@CachePut` - indicates that a method (or all methods on a class) triggers a cache put operation.
`@Caching` - Group annotation for multiple cache annotations (of different or the same type).

The annotations above can be placed either on a method or on a class. When placed on a single method, the caching behavior prescribed by the annotation applies
only to that method. If the annotation is placed at the class level, however, the caching  behavior is applied to all methods in that class.

**Populating the cache**:- The @Cacheable and @CachePut annotations can both populate a cache. They work in slightly different ways, though.
@Cacheable looks for an entry in the cache first, preempting the method invocation if a matching entry is found. If no matching entry is found, the method is invoked
and the value returned is put in the cache. @CachePut, on the other hand, never checks for a matching value in the cache, always allows the target method to be
invoked, and adds the returned value to the cache.
@Cacheable and @CachePut share a common set of attributes, which are listed below:-

1. value - String[] - The name(s) of the cache(s) to use
2. condition - String - A SpEL expression that, if it evaluates to false, results in caching not being applied to the method call
3. key - String - A SpEL expression to calculate a custom cache key
4. unless - String - A SpEL expression that, if it evaluates to true, prevents the return value from being put in the cache
