# 第1题 描述引用计数的工作原理和优缺点
* 设置引用数，判断当前引用数是否为0，引用计数的含义是跟踪记录每个值被引用的次数。也即当声明了一个变量并将一个引用类型值赋给该变量时，则该值的引用次数就是1；如果同一个值又被赋给另一个变量，则该值的引用次数加1；如果包含对该值引用的变量又取得了另外一个值，则该值的引用次数减1。当该值的引用次数变为0时，则GC可以回收其占用的内存空间。当垃圾回收器下一次运行时，就会释放那些引用次数为0的值所占用的内存。
* 优点：
1. 发现垃圾立即回收
2. 最大限度减少程序暂停（自动找寻引用数为0的变量进行垃圾回收）

* 缺点
1. 无法回收循环引用的对象（手动断开两个对象之间的相互引用，设置为null）
2. 时间开销大（需要时刻维护引用数的变化）

# 第2题 描述标记整理算法的工作流程 
1. 遍历所有对象标记所有活动对象
2. 移动整理对象位置，使释放内存空间是连续的
3. 清除未标记对象，并把已标识对象标记清除

# 第3题 描述V8中新生代存储区垃圾回收的流程
* 新生代指存货时间较短的对象，回收过程采用复制算法+标记整理
* 具体流程
1. 将新生代存储区分为两个大小空间，分别为使用空间和空闲空间
2. 活动对象存储于使用空间，标记整理好活动对象后将活动对象拷贝至空闲空间
3. 最后释放原先的使用空间，完成使用空间和空闲空间的互换


# 第4题 增量标记算法在何时使用，以及工作原理
* 增量标记算法适用在内存空间大，活动对象存在时间长的场景
* 增量标记算法原理是程序执行和遍历对象进行标记交替执行，最后清除（不超过内存上限循环执行） ，不影响js程序运行


# 代码题目见code 文件夹p1.js  p2.js


