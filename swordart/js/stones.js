/**
 * Created by zhuo on 2017/9/3.
 */
var stonesMap = {
    plain1 : [
            1,1,3,3,3,3,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,
            0,0,0,0,10,3,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,
            0,0,0,0,0,3,1,1,1,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,
            0,0,0,0,0,3,1,1,1,0,0,3,0,0,1,1,1,0,0,0,3,3,0,0,0,
            0,0,0,0,0,3,1,1,1,0,0,3,0,0,1,1,1,1,1,1,0,3,0,0,0,
            0,0,0,0,0,3,1,1,1,0,0,3,0,0,1,1,1,0,0,0,0,3,0,0,0,
            0,0,0,0,0,3,3,3,3,3,3,3,0,0,1,1,1,0,0,0,0,3,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,3,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,3,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,3,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,3,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,3,3,3,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,3,3,0,0,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,3,0,0,0,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,3,0,0,0,0,0,0,
            2,2,2,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,3,0,0,0,0,0,0,
            2,2,2,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,3,0,1,1,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,3,0,0,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,3,3,3,0,0,0,0,
            0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,3,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,3,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,12,1,1,1,1,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,3,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,11,0,0,1,1,1,0,0,0,3,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,3,3,3,14,1,
    ],
    shop : [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,
        1,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,
        1,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,1,
        0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,11,0,0,
        0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,10,
        0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,
        0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,10,
        0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,
        0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,10,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,14,1,
    ],
    floor3 : [
        11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,3,9,3,3,3,3,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,3,1,1,1,1,1,
        2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,3,1,1,1,12,12,
    ]
}
