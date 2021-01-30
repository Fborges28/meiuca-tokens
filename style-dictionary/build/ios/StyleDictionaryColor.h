
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Sat, 30 Jan 2021 19:57:54 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBrandPrimary01,
ColorBrandPrimary02,
ColorBrandPrimary03,
ColorBrandPrimary04,
ColorBrandPrimary05,
ColorFontTertiary,
ColorNeutral01,
ColorNeutral02,
ColorNeutral03,
ColorNeutral04,
ColorNeutral05
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
